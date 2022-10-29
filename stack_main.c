#include<stdio.h>
#include<stdlib.h>
#define MAX 5

struct Stack
{
    int stack[MAX];
    int sp;
}s;

int ISFULL()
{
    if(s.sp==MAX-1)
    return 1;
    else
    return 0;
}

int ISEMPTY()
{
    if(s.sp==-1)
    return 1;
    else
    return 0;
}

void push(int a)
{
    if (ISFULL())
    printf("Overflow\n");
    else
    s.stack[++s.sp]=a;
}

int pop()
{
    if (ISEMPTY())
    {
        printf("Underflow\n");
        return 0;
    }
    else
    return s.stack[s.sp--];
}

void display()
{
    int a=s.sp;
    for(int i=a;i>-1;i--)
    printf("%d  ",s.stack[i]);
    printf("\n");
}

int main()
{
    s.sp=-1;
    while(1)
    {
        int choice;
        printf("1.PUSH\n");
        printf("2.POP\n");
        printf("3.IS EMPTY?\n");
        printf("4.IS FULL?\n");
        printf("5.DISPLAY\n");
        printf("6.EXIT\n");
        printf("Enter ur choice : ");
        scanf("%d",&choice);
    
        switch(choice){
            case 1:printf("\nEnter value ");
            int val;
            scanf("%d",&val);
            push(val);
            break;

            case 2:val=pop();
            printf("value popped : %d",val);
            break;
        
            case 3:if(ISEMPTY())
            printf("Yes\n");
            else
            printf("No\n");
            break;
        
            case 4:if(ISFULL())
            printf("Yes\n");
            else
            printf("No\n");
            break;

            case 5:display();
            break;

            case 6:exit(0);
            break;
        }
    }
    return 0;
}
