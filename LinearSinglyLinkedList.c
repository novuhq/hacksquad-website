#include <stdio.h>
#include <stdlib.h>
typedef struct linkedList
{
    int data;
    struct linkedList *next;
} node;
node *create()
{
    int data;
    printf("Enter the data: ");
    scanf("%d", &data);
    node *new = (node *)malloc(sizeof(node));
    new->data = data;
    new->next = NULL;
}
void display(node *start)
{
    if (start == NULL)
        printf("Empty linked list.\n");
    else
    {
        printf("Contents: \n");
        while (start != NULL)
        {
            printf("%d\t", start->data);
            start = start->next;
        }
    }
}
void countOfNodes(node **start)
{
    int count = 0;
    node *temp;
    temp = *start;
    while (temp != 0)
    {
        count++;
        temp = temp->next;
    }
    printf("\nNumber of node is: %d", count);
}
void insert_first(node **start)
{
    node *newNode = create();
    if (*start == NULL)
        *start = newNode;
    else
    {
        newNode->next = *start;
        *start = newNode;
    }
}
void insert_last(node **start)
{
    node *newNode = create();
    if (*start == NULL)
        *start = newNode;
    else
    {
        node *ptr = *start;
        while (ptr->next != NULL)
            ptr = ptr->next;
        ptr->next = newNode;
    }
}
void delete_first(node **start)
{
    if (*start == NULL)
        printf("Error.\n");
    else
    {
        node *temp = *start;
        *start = (*start)->next;
    }
}
void delete_last(node **start)
{
    if (*start == NULL)
        printf("Error.\n");
    else if ((*start)->next == NULL)
    {
        node *temp = *start;
        *start = NULL;
    }
    else
    {
        node *ptr = *start;
        node *preptr = NULL;
        while (ptr->next != NULL)
        {
            preptr = ptr;
            ptr = ptr->next;
        }
        preptr->next = NULL;
    }
}
void insertAtPositionFlexible(node **start)
{
    int count = 0;
    node *temp = *start;
    while (temp != NULL)
    {
        count++;
        temp = temp->next;
    }
    int pos;
    printf("Enter the given position: ");
    scanf("%d", &pos);
    if (pos < 0 || pos > count)
    {
        printf("Invalid position.\n");
        return;
    }
    int data;
    node *new = (node *)malloc(sizeof(node));
    new->data = data;
    new->next = NULL;
    if (pos == 0)
    {
        new->next = *start;
        *start = new;
    }
    else
    {
        temp = *start;
        int i = 1;
        while (i < pos - 1)
        {
            temp = temp->next;
            i++;
        }
        printf("Enter the data you want to insert: ");
        scanf("%d", &(new->data));
        new->next = temp->next;
        temp->next = new;
    }
}
void deleteAtPositionFlexible(node **start)
{
    int pos, i = 1;
    node *temp, *preptr;
    temp = *start;
    printf("Enter the position :");
    scanf("%d", &pos);
    while (i < pos - 1)
    {
        temp = temp->next;
        i++;
    }
    preptr = temp->next;
    temp->next = preptr->next;
    free(preptr);
}
void searchAndDelete(node **start, int target)
{
    node *temp = *start;
    node *prev = NULL;
    if (temp != NULL && temp->data == target)
    {
        *start = temp->next;
        free(temp);
        printf("Deleted %d from the list.\n", target);
        return;
    }
    while (temp != NULL && temp->data != target)
    {
        prev = temp;
        temp = temp->next;
    }
    if (temp != NULL)
    {
        prev->next = temp->next;
        free(temp);
        printf("Deleted %d from the list.\n", target);
    }
    else
    {
        printf("%d not found in the list.\n", target);
    }
}
void searchAndPrintPosition(node *start, int target)
{
    int pos = 0;
    node *temp = start;
    while (temp != NULL)
    {
        pos++;
        if (temp->data == target)
        {
            printf("%d found at position %d in the list.\n", target, pos);
            return;
        }
        temp = temp->next;
    }
    printf("%d not found in the list.\n", target);
}
void reverse(node **start)
{
    node *prev = NULL, *current, *new;
    current = *start;
    while (current != NULL)
    {
        new = current->next;
        current->next = prev;
        prev = current;
        current = new;
    }
    *start = prev;
}
int main()
{
    node *new = NULL;
    int choice, num_node, x, y;
    printf("Enter how many nodes to be inserted: ");
    scanf("%d", &num_node);
    for (int i = 0; i < num_node; i++)
        insert_last(&new);
    do
    {
        printf("\nEnter your choice: ");
        printf("\nPress 1 to insert at 1st.\nPress 2 to insert at last.\nPress 3 to insert at a given position.\nPress 4 to delete at first.\nPress 5 to delete at last.\nPress 6 to delete at a certain position.\nPress 7 to search an element and delete it.\nPress 8 to search an element and print it's position.\nPress 9 to reverse the linked list.\nPress 10 to display.\nPress 11 to exit\n");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            insert_first(&new);
            break;
        case 2:
            insert_last(&new);
            break;
        case 3:
            insertAtPositionFlexible(&new);
            break;
        case 4:
            delete_first(&new);
            break;
        case 5:
            delete_last(&new);
            break;
        case 6:
            deleteAtPositionFlexible(&new);
            break;
        case 7:
            printf("Enter the number to search: ");
            scanf("%d", &x);
            searchAndDelete(&new, x);
            break;
        case 8:
            printf("Enter the number to search: ");
            scanf("%d", &y);
            searchAndPrintPosition(new, y);
            break;
        case 9:
            reverse(&new);
            break;
        case 10:
            display(new);
            countOfNodes(&new);
            break;
        case 11:
            printf("Exited successfully!\n");
            exit(0);
            break;
        default:
            printf("Invalid option.");
        }
    } while (choice != 0);
    return 0;
}
