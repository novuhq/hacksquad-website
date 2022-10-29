#include<stdio.h>
int main() 
{ 
    int i, j, n, m;
    printf("Enter no of rows: ");
    scanf("%d", &n);
    printf("Enter no of columns: ");
    scanf("%d", &m);
    int a[n][m], b[n][m];
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < m; j++)
        { 
            scanf("%d", &a[i][j]);
        }
    }

     printf("Original matrix is\n");
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < m; j++)
        {
            printf("%d  ", a[i][j]);

        }
        printf("\n");
    }
    
    for(int i = m-1; i >= 0; i--)
    {
      for(int j = 0; j < n; j++)
        b[j][m-i-1] = a[i][j];
    }
    
    printf("Matrix after 90 clockwise rotation\n");

    for(int i = 0; i < n; i++) 
    {
        for(int j = 0; j < m; j++)
           printf("%d ", b[i][j]);
        printf("\n");
    }
    return 0; 
}
