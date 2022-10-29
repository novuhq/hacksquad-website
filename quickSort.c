#include<time.h>
#include<stdio.h>
#include<math.h>
#include<stdlib.h>
void quicksort(int a[],int first,int last)
{
   int i, j, pivot, temp;

   if(first<last)
    {
      pivot=first;//0
      i=first;//0
      j=last;//12

      while(i<j){
        while(a[i]<=a[pivot])
            i++;
        while(a[j]>a[pivot])
            j--;    
        if(i<j){
            temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
      }

      temp=a[pivot];
      a[pivot]=a[j];
      a[j]=temp;
      quicksort(a,first,j-1);
      quicksort(a,j+1,last);

   }
}

int main()
{
   clock_t t;
   int i, n,lower=-65536, upper=65536;;

   printf("Enter total no.of elements: ");
   scanf("%d",&n);
   int a[n]; 
   for(i=0;i<n;i++)
   {
      a[i]=(rand() % (upper-lower+1) + lower);
   }

   t = clock();
   quicksort(a,0,n-1);
   t = clock() - t;
   //double diff=end-start;
   double time=((double)t)/(CLOCKS_PER_SEC);
   printf("\n The time to execute this program is %lf",time);
   /*printf("\nSorted Array: ");
   for(i=0;i<n;i++)
      printf(" %d",a[i]);
   */
   return 0;
}
