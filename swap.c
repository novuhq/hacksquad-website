#include <stdio.h>

void swap(int *a, int *b);

int main()
{
    printf("Enter two numbers: \n");
    int m,n;
    scanf("%d",&m);
    scanf("%d",&n);
    printf("m = %d\n", m);
    printf("n = %d\n\n", n);

    swap(&m, &n);    
    printf("Numbers after Swapping:\n\n");
    printf("m = %d\n", m);
    printf("n = %d", n);
    return 0;
}


void swap(int *a, int *b) 
{
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}
