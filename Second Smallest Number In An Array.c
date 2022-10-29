#include <stdio.h>

int main()
{
    int n,a[100],i,j,m,t,freq[10],f=0;
    printf("Enter the size of array : ");
    scanf("%d",&n);
    printf("Enter the elements of array : ");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    for(i=0;i<=9;i++)
    { 
        freq[i]=0;
        for(j=0;j<n;j++)
        {   
            if(a[j]==i)
            freq[i]++; 
        }
    }
    for(i=0;i<=9;i++)
    {   if(freq[i]>=1 && freq[i]<n)
        {   
            if(f==1)
            {   
                printf("\nSecond smallest element in the array is %d ",i);
                f=0;
                break;
            }
         f=1;
        }
      else if(freq[i] == n)
      { printf("\nNo second smallest element is present "); }
      
    }
      return 0;
}
