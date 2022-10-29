#include <stdio.h>
#include <stdlib.h>

struct node{
    struct node* prev;//pointer to previous node
    int data;
    struct node* next;//pointer to next node
};
int count(struct node*);
//function to create a single node
struct node* create_node()
{
    struct node* temp=(struct node*)malloc(sizeof(struct node));
    printf("Enter data: ");
    scanf("%d",&temp->data);
    temp->prev=NULL;
    temp->next=NULL;
    return temp;
}
//function to create a doubly linked list with n nodes
struct node* create_list_n_nodes(struct node* head)
{
    struct node* temp,*change;
    int n;
    printf("Enter the value of n\n");
    scanf("%d",&n);
    if(n==1)
    {
        head=create_node();
    }
    else if(n>1)
    {
        int i;
        for(i=1;i<=n;i++)
        {
            temp=create_node();
            if(head==NULL)
            {
                head=temp;
                change=temp;
            }
            else
            {
            change->next=temp;
            temp->prev=change;
            change=temp;
            }
        }
    }
    else
    {
        printf("Invalid 'n' value.\n");
    }
    return head;
}
/*function to create nodes one at a time 
by asking the user whether he/she wants to add more nodes*/
struct node* create_list_user_choice(struct node* head)
{
    struct node* temp,*change;
    int c;
    do{
        temp=create_node();
        if(head==NULL)
        {
            head=temp;
            change=temp;
        }
        else
        {
            change->next=temp;
            temp->prev=change;
            change=temp;
        }
        printf("Press 1 to add more node or 0 to exit\n");
        scanf("%d",&c);
        
        }while(c==1);
        
    return head;
}
//function to insert a node at the beginning of the doubly linked list
struct node* insert_at_beg(struct node* head)
{
    struct node* temp,*change;
    if(head==NULL)
    {
        head=create_node();
    }
    else
    {
        temp=create_node();
        temp->next=head;
        head->prev=temp;
        head=temp;
    }
    return head;
}
//function to insert a node at the end of the doubly linked list
struct node* insert_at_end(struct node* head)
{
    struct node* temp,*change;
    if(head==NULL)
    {
        head=create_node();
    }
    else
    {
        change=head;
        while(change->next!=NULL)
        {
            change=change->next;
        }
        temp=create_node();
        change->next=temp;
        temp->prev=change;
    }
    return head;
}
/*function to insert a node at the nth position starting from 
beginning of the doubly linked list*/
struct node* insert_at_nth_pos(struct node* head)
{
    struct node* temp,*change;
    int i,n,l=0;
    printf("Enter n\n");
    scanf("%d",&n);
    l=count(head)+1;
    while(n<1||(n>l))
    {
        printf("Invalid n..Re-enter!");
        scanf("%d",&n);
    }
    if(n==1)
    {
        head=insert_at_beg(head);
    }
    else if(n==l)
    {
        change=head;
        for(i=0;i<n-2;i++)
        {
            change=change->next;
        }
        temp=create_node();
        temp->prev=change;
        change->next=temp;
        
    }
    else 
    {
        change=head;
        for(i=0;i<n-2;i++)
        {
            change=change->next;
        }
        temp=create_node();
        temp->next=change->next;
        change->next->prev=temp;
        change->next=temp;
        temp->prev=change;
    }
    return head;
}
//function to insert a node after a particular node with value n
struct node* insert_after_nodeVal_n(struct node* head)
{
    struct node* temp,*change;
    int n;
    printf("Enter n\n");
    scanf("%d",&n);
    change=head;
    while(change!=NULL&&change->data!=n)
    {
        change=change->next;
    }
    if(change==NULL)
    printf("Node with value %d does not exist\n",n);
    else
    {
        temp=create_node();
        temp->next=change->next;
        change->next->prev=temp;
        change->next=temp;
        temp->prev=change;
    }
    return head;

}
//function to insert a node before a particular node with value n
struct node* insert_b4_nodeVal_n(struct node* head)
{
    struct node* temp,*change;
    int n;
    printf("Enter n\n");
    scanf("%d",&n);
    if(head->data==n)
    {
        head=insert_at_beg(head);
    }
    else
    {
        change=head;
        while(change->next!=NULL&&change->next->data!=n)
        {
            change=change->next;
        }
        if(change->next==NULL)
        printf("Node with value %d does not exist\n",n);
        else
        {
            temp=create_node();
            temp->next=change->next;
            change->next->prev=temp;
            change->next=temp;
            temp->prev=change;
        }
    }
    return head;
}
//function to delete the first node
struct node* del_1st_node(struct node* head)
{
    struct node* temp=head;
    if(head==NULL)
    {
        printf("List is empty!!\n");
    }
    else
    {
        if(head->next==NULL)
        {
            free(head);
            head=NULL;
        }
        else
        {
            //temp=head;
            head=head->next;
            head->prev=NULL;
            free(temp);
            temp=NULL;
        }
    }
    return head;
}
//function to delete the last node
struct node* del_last_node(struct node* head)
{
    struct node* temp=head;
    
    if(head==NULL)
    {
        printf("List is empty..deletion not possible!!");
    }
    else
    {
        if(head->next==NULL)
        {
            free(head);
            head=NULL;
            temp=NULL;
        }
        else
        {
            while(temp->next!=NULL)
            {
               temp=temp->next; 
            }
            temp->prev->next=NULL;
            free(temp);
            temp=NULL;
        }
    }
    return head;
}
//function to delete the node whose value is n
struct node* del_nodeVal_n(struct node* head)
{
    struct node* temp,*ptr;
    int n;
    printf("\nEnter the value of n: ");
    scanf("%d",&n);
    if(head==NULL)
    {
        printf("\nDeletion not possible.");
    }
    else if(head->data==n)
    {
        del_1st_node(head);
    }
    else
    {
        ptr=head;
        while((ptr!=NULL)&&(ptr->data!=n))
        {
            ptr=ptr->next;
        }
        if(ptr->next==NULL)
        {
            printf("\nn does not exist in the list");
        }
        else
        {
            temp=ptr->prev;
            ptr->next->prev=temp;
            temp->next=ptr->next;
            free(ptr);
        }
    }
    return head;
}
//function to delete the node before a particular node with value n
struct node* del_b4_nodeVal_n(struct node* head)
{
    struct node *temp,*ptr;
    int n;
    printf("Enter value of n: ");
    scanf("%d",&n);
    if((head==NULL)||(head->data==n))
    {
        printf("\nDeletion not possible.");
    }
    if(head->next->data==n)
    {
        temp=head;
        head=head->next;
        head->prev=NULL;
        free(temp);
    }
    else
    {
        ptr=head;
        while((ptr->next!=NULL)&&(ptr->next->data!=n))
        {
            ptr=ptr->next;
        }
        if(ptr->next==NULL)
        {
            printf("\nn does not exist in the list.");
        }
        else
        {
            temp=ptr->prev;
            ptr->next->prev=temp;
            temp->next=ptr->next;
            free(ptr);
        }
    }
    return head;
}
//function to delete the node after a particular node with value n
struct node* del_after_nodeVal_n(struct node* head)
{
    int n;
    struct node* temp,*ptr;
    printf("Enter n: \n");
    scanf("%d",&n);
    if(head==NULL)
    {
        printf("\nList is empty...deletion not possible!!");
    }
    else
    {
        ptr=head;
        while((ptr!=NULL)&&(ptr->data!=n))
        {
            ptr=ptr->next;
        }
        if((ptr!=NULL)&&(ptr->next!=NULL))
        {
            temp=ptr->next;
            ptr->next=temp->next;
            if(temp->next!=NULL)
            {    
                ptr->next->prev=ptr;
            }
            free(temp);
        }
        else
        {
            printf("\nNo node exists after node value %d to be deleted",n);
        }
    }
    return head;
}
//function to display the doubly linked list
void display_list(struct node* head)
{
    struct node* temp;
    temp=head;
    while(temp!=NULL)
    {
        printf("%d ",temp->data);
        temp=temp->next;
    }
    printf("\n");
}
//function to count the number of nodes in the list
int count(struct node* head)
{
    struct node* temp=head;
    int c=0;
    while(temp!=NULL)
    {
        c++;
        temp=temp->next;
    }
    return c;
}
//function to search an element in the list
void search_element(struct node* head)
{
    struct node* temp=head;
    int n,c=1,flag=0;
    printf("Enter the element: ");
    scanf("%d",&n);
    while(temp!=NULL)
    {
        if(temp->data==n)
        {
            flag=1;
            printf("\n%d exists at position = %d in the list.\n",n,c);
            break;
        }
        temp=temp->next;
        c++;
    }
    if(flag==0)
    printf("Element not found.\n");
}
int main()
{
    struct node* head=NULL;
    int choice,bool=1,flag=0,n;
    char ch;
    while(bool)
    {
        start:
        
        printf("1.Create the list\n2.Insert any element\n3.Delete an element\n4.Display the list\n5.Count the number of nodes\n6.Search an element in the list.\n");
        scanf("%d",&choice);
        switch(choice)
        {
            case 1:
                if(flag==0)
                {
                    printf("a) Create a list of n nodes\nb) Create a list based on user choice.\n");
                    scanf("%s",&ch);
                    if(ch=='a')
                    {
                        flag=1;
                        head=create_list_n_nodes(head);
                    }
                    else if(ch=='b')
                    {
                        flag=1;
                        head=create_list_user_choice(head);
                    }
                }
                else
                {
                    printf("\nThe list already exists!!!Try inserting elements.\n");
                    goto start;
                }
                break;
            case 2:
                printf("a) Insert at the beginning\nb) Insert at the end\nc) Insert at the nth position\nd) Insert after the node having value n\ne) Insert before the node having value n.\n");
                scanf("%s",&ch);
                if(ch=='a')
                {
                    head=insert_at_beg(head);
                }
                else if(ch=='b')
                {
                    head=insert_at_end(head);
                }
                else if(ch=='c'&&flag==1)
                {
                    head=insert_at_nth_pos(head);
                }
                else if(ch=='d'&&flag==1)
                {
                    head=insert_after_nodeVal_n(head);
                }
                else if(ch=='e'&&flag==1)
                {
                   head=insert_b4_nodeVal_n(head); 
                }
                else
                {
                    printf("First insert something!!!\n");
                    goto start;
                }
                break;
            case 3:
                
                if(flag==1)
                {
                    printf("a) Delete the 1st node\nb) Delete the last node\nc) Delete the node having value n\nd) Delete the node before the node value n\ne) Delete the node after the node value n.");
                    scanf("%s",&ch);
                    if(ch=='a')
                    {
                        head=del_1st_node(head);
                    }
                    else if(ch=='b')
                    {
                        head=del_last_node(head);
                    }
                    else if(ch=='c')
                    {
                        head=del_nodeVal_n(head);
                    }
                    else if(ch=='d')
                    {
                        head=del_b4_nodeVal_n(head);
                    }
                    else if(ch=='e')
                    {
                        head=del_after_nodeVal_n(head);
                    }
                }
                else
                {
                    printf("Create list first before deleting\n");
                    goto start;
                }
                break;
            case 4:
                display_list(head);
                break;
            case 5:
                printf("\n%d",count(head));
                break;
            case 6:
                search_element(head);
                break;
            default:
                printf("Wrong choice!!Choose a valid option.\n");
                goto start;
        }
        printf("To continue press 1 else press 0\n");
        scanf("%d",&bool);
        printf("\n----------------------------------------------------------------\n\n");
    }
    
}
