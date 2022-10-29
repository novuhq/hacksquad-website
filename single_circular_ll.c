#include<stdio.h>
#include<stdlib.h>
struct node{
    int value;
    struct node *next;
    
}*new1,*temp,*rear,*front;

void init()
{
    front=rear=NULL;
}

struct node *createnode()
{
    temp=NULL;
    temp=(struct node *)malloc(sizeof(struct node));
    return temp;
}

void enqueue(int v)
{
    new1=createnode();
    if(front==NULL)
    {
        front=rear=new1;
        front->next=new1;
        front->value=v;
    }
    else
    {
        rear->next=new1;
        new1->value=v;
        rear=new1;
        rear->next=front;
    }
}
void dequeue()
{
    if(front==NULL)
        printf("UNDERFLOW\n-----------------");
    else if(front==rear)
    {
        front=rear=NULL;
    }
    else
    {
        temp=front;
        front=front->next;
        free(temp);
        rear->next=front;
    }
}
void display()
{
    if(front!=NULL){
    printf("\nElements are:\n");
    temp=front;
    do
    {
        printf("%d ",temp->value);
        temp=temp->next;
    } while (temp->next!=front);
    printf("%d",temp->value);
    printf("\n***********");
    }
    else
        printf("\nNo elements...\n");
}
int main()
{
    init();
    int c;
    int value;
    while(1)
    {
        printf("\n1.ENQUEUE");
        printf("\n2.DEQUEUE");
        printf("\n3.DISPLAY");
        printf("\n4.EXIT");
        printf("\n-------------------------------------\n");
        scanf("%d",&c);
        switch (c)
        {
        case 1:
            printf("Enter No. to be added: ");
            scanf("%d",&value);
            enqueue(value);
            break;
        case 2:
            dequeue();
            break;
        case 3:
            display();
            break;
        case 4:
            exit(0);
            break;
        default:
            continue;
        }
    }
}
