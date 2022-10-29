#include <iostream>
using namespace std;

int main() {
	int Test_case; // no of test cases
	cin>>Test_case;
	for(int i=0;i<Test_case;i++)
	{
	    int N_size,Sum; // initializing size of array and sum
	    cin>>N_size>>Sum; // taking input
	    int A[N_size];
	    for(int j=0;j<N_size;j++) 
	        cin>>A[j];
	    int pivot=0,sum=0,flag=0;
	    for(int j=0;j<N_size;j++)
	    {
	        sum=sum+A[j];
	        while(sum>Sum)
	        {
	            sum=sum-A[pivot];
	            pivot++;
	        }
	        if(sum==Sum)
	        {
	            cout<<pivot+1<<" "<<j+1<<"\n"; // we got the index from where to where sum is sum 
	            flag=1; 
	            break;
	        }
	    }
	    if(flag==0)
	        cout<<"-1"<<"\n";
	}
	return 0;
}
