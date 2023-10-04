import java.util.Scanner;

public class bubblesort {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int i,j,t;
        int m[]=new int[10];
        for(i=0;i<10;i++)
        {
            System.out.println("enter the number in the cell");
            m[i]=sc.nextInt();
        }

        for(i=0;i<9;i++)
        {
            for(j=0;j<9-i;j++)
            {
                if(m[j]>m[j+1])
                {
                    t=m[j];
                    m[j]=m[j+1];
                    m[j+1]=t;
                }
            }
        }
        System.out.println("thr number arrange assendinhg order:");
        for(i=0;i<10;i++)
        System.out.println(m[i]); 
    
    }
}
