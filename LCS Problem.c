#include<stdio.h>
#include<string.h>
 
int m,n,c[20][20];
char x[20],y[20],b[20][20];
 
void displaylcs(int i,int j){
    if(i==0 || j==0)
        return;
    if(b[i][j]=='c'){
        displaylcs(i-1,j-1);
        printf("%c",x[i-1]);}
    else if(b[i][j]=='u')
        displaylcs(i-1,j);
    else
        displaylcs(i,j-1);
}

 
void lcs()
{
        m=strlen(x);
        n=strlen(y);
        int i, j;
     	for(i=0;i<=m;i++)
		c[i][0]=0;
		for(i=0;i<=n;i++)
        c[0][i]=0;
         for(i=1;i<=m;i++)
         {
            for(j=1;j<=n;j++){
                if(x[i-1]==y[j-1]){
                    c[i][j]=c[i-1][j-1]+1;
                    b[i][j]='c';}
                    
                else if(c[i-1][j]>=c[i][j-1]) {
                    c[i][j]=c[i-1][j];
                    b[i][j]='u';}
                    
               else{
	               	c[i][j]=c[i][j-1];
	                b[i][j]='l'; }
	            
            }
    }
}
int main()
{
	int tries =0;
	printf("-------------------LCS PROBLEM--------------------");
	while(tries != 1){
		printf("\nEnter 1st sequence:");
	    scanf("%s",x);
	    printf("Enter 2nd sequence:");
	    scanf("%s",y);
	    printf("\nThe Longest Common Subsequence is :- ");
	    lcs();
	    displaylcs(m,n);
	    printf("\nThe Length of LCS : %d", c[m][n]);
		printf("\nDo you want to continue ? Enter 1 to exit. ");
		scanf("%d", &tries);
	}
return 0;
}
