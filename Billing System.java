
import java.util.*;
import java.io.*;
class Main{
    static Scanner sc=new Scanner(System.in);
    static ArrayList<List> csh=new ArrayList<List>(); 
    static ArrayList<List> stc=new ArrayList<List>();
    static ArrayList al=new ArrayList<>();
    static int i=0,billId=1;
    static void cashierfunc()
    {
        boolean fla=true;
        while(true)
        {
            System.out.println("\t\t\t1.AddStock\n\t\t\t2.ViewStock\n\t\t\t3.removeStock\n\t\t\t4.newBill\n\t\t\t5.viewBill\n\t\t\t6.Logout");
            try{
            System.out.print("Enter a Choice:");
            int choice=sc.nextInt();
            if(choice==1)
            {    System.out.print("How many stock you Added:");
                int n=sc.nextInt();
                for(int i=0;i<n;i++)
                {
                System.out.print("Enter Your Stock Name:");
                String stname=sc.next();
                System.out.print("Stock Count:");
                double stccou=sc.nextDouble();
                System.out.print("Enter costprice of Single Stock:");
                double stcpri=sc.nextDouble();
                System.out.print("Enter tax of Single Stock:");
                double stctax=sc.nextDouble();
                 for(List d:stc)
                  {
                      if(((String)d.get(0)).equals(stname)) fla=false;
                      d.set(1,stccou+((Double)d.get(1)));
                  }
                  if(fla)
                   stc.add(Arrays.asList(stname,stccou,stcpri,stctax));
                fla=true;
                }
            }
            else if(choice==2)
            {
                File sl=new File("stocks.txt");
                sl.createNewFile();
               PrintWriter fg=new PrintWriter(sl);
                System.out.println("===================================================");
                System.out.println("Stock Name   stock count   CP of Single unit   Tax ");
                fg.printf("Stock Name   stock count   CP of Single unit   Tax \n");
                System.out.println("----------   -----------   -----------------   ----");
                for(List l:stc)
                {
                    System.out.printf("%-10s   %-11f   %-17f   %-4.2f\n",l.get(0),l.get(1),l.get(2),l.get(3));
                    fg.printf("%-10s   %-11f   %-17f   %-4.2f\n",l.get(0),l.get(1),l.get(2),l.get(3));
                }
                System.out.println("===================================================");
               fg.close();
            }
            else if(choice==3)
            {
                System.out.print("Enter Your RemoveStockName:");
                String rname=sc.next();
                int i=0;
                try{
                for(List k:stc)
                {
                   
                    if(rname.equalsIgnoreCase(k.get(0).toString()))
                       stc.remove(i);
                    i++;
                }
            }
            catch(Exception e)
            {
                System.out.println("");
            }
            }
            else if(choice==4)
            {
                boolean f=true;
                    ArrayList s=null;
                    ArrayList  s1=null;
                    s1=new ArrayList<>(); s=new ArrayList<>();
                    
                    Double to=0.0;
                    while(true)
                    {
                         System.out.print("Enter StockName:");String neStockname=sc.next();
                         System.out.print("how many you want(count):");Double neStockcount=sc.nextDouble();
                       for(List k:stc)    
                       {
                          
                           if(k.get(0).equals(neStockname)&&(Double)k.get(1)>=neStockcount)
                           { 
                             Double t=Double.parseDouble(k.get(3).toString());
                             Double f1=Double.parseDouble(k.get(2).toString());
                                Double e=((t/100.0*f1)+f1)*neStockcount;
                               s.add((String)k.get(0));
                               s.add((Double)neStockcount);
                               s.add((Double)k.get(2));
                               s.add((Double)k.get(3));
                               s.add((Double)e);
                               s.add(e+to);
                               to+=e;
                               s1.add(s);
                               k.set(1,(Double)k.get(1)-neStockcount);
                            f=false;
                               s=new ArrayList<>();
                           }
                       }
                        System.out.print("Do yo want yes/no:");
                        if(sc.next().equals("no"))
                        {
                            break;
                        }
                    }
                    if(f)
                      System.out.println("Stock Not Available");
                    al.add(s1);
            }
            else if(choice==5)
            {
                File sl=new File("newbill.txt");
                sl.createNewFile();
                PrintWriter fb=new PrintWriter(sl);
                int n=5,i,j;
                System.out.println("StockName     stockcount     singleprice        tax          total");
                fb.printf("StockName     stockcount     singleprice        tax          total\n");
                for(Object k:al)
                {
                
                  for( i=0;i<((ArrayList)k).size();i++)
                    {
                                System.out.printf("%-9s     %-10f     %-11f     %-3f     %-5f\n",((ArrayList)((ArrayList)k).get(i)).get(0),((ArrayList)((ArrayList)k).get(i)).get(1),((ArrayList)((ArrayList)k).get(i)).get(2),((ArrayList)((ArrayList)k).get(i)).get(3),((ArrayList)((ArrayList)k).get(i)).get(4));
                                fb.printf("%-9s     %-10f     %-11f     %-3f     %-5f\n",((ArrayList)((ArrayList)k).get(i)).get(0),((ArrayList)((ArrayList)k).get(i)).get(1),((ArrayList)((ArrayList)k).get(i)).get(2),((ArrayList)((ArrayList)k).get(i)).get(3),((ArrayList)((ArrayList)k).get(i)).get(4));
                        System.out.println();
                        if(i==((ArrayList)k).size()-1){
                         System.out.println("======================================================================");
                          System.out.println("                                                  THETOTAL:"+((ArrayList)((ArrayList)k).get(i)).get(5));
                          fb.printf("                                                    THETOTAL:%-5f\n",((ArrayList)((ArrayList)k).get(i)).get(5));
                        }
                    }
                    System.out.println("======================================================================");
                }
              fb.close();
            }
            else if(choice==6)
            {
                break;
            }
        }
        catch(Exception e)
        {
            sc.next();
        }

        }
    }
    static void Cashier()
    {
            int f=0;
            System.out.print("Enter the Name:");
            String csname=sc.next();
            System.out.print("Enter the Password:");
             String cspass=sc.next();
            for(List k:csh)
            {
                if(csname.equals(k.get(0))&&cspass.equals(k.get(1)))
                {
                    System.out.println("Login Succesfull.......");
                    cashierfunc();
                    f=1;
                    break;
                }
            }
            if(f==0)
               System.out.println("Wrong id or password");
    }
    static void Owner() throws IOException
    {
        boolean f1=true; File 
        fl=new File("casheirs.txt");
            fl.createNewFile();
             PrintWriter out=new PrintWriter(fl);
		    out.printf(" CashierName     Password \n");
	        out.printf("|-----------     --------|\n");
            
        while(true)
        {
          
            System.out.println("\t\t\t1.AddCashier\n\t\t\t2.ViewCashier\n\t\t\t3.removeCashier\n\t\t\t4.logout");
            System.out.print("Enter Your Choice:");
            int choice=sc.nextInt();
            if(choice==1)
            {
                System.out.print("Enter CashierName:");
                String csname=sc.next();    
                System.out.print("Enter password:");
                String cspass=sc.next();
                  for(List d:csh)
                  {
                      if(((String)d.get(0)).equals(csname)) f1=false;
                  }
                  if(f1)
                  {
                   csh.add(Arrays.asList(csname,cspass));
                  	out.printf("|%-11s     %-8s|\n",csname,cspass);
                  }
                  else
                   System.out.println("already exists....");
                  if(f1)
                    System.out.println("....... Cashier added Succesfully.......");
              f1=true; 
            }
            else if(choice==2)
            {
                    System.out.printf(" CashierName     Password \n");
                    System.out.printf("|-----------     --------|\n");
                    for(List k:csh)
                    {
                        System.out.printf("|%-11s     %-8s|\n",k.get(0),k.get(1));
                        System.out.println("|                        |");
                    }
                    
                     System.out.printf("|========================|\n");
            }
            else if(choice==3)
            {
                    int i=0,f=0;
                    System.out.println("Enter The Remove Name:");
                    String rname=sc.next();
                    try{
                    for(List k:csh)
                    {
                       
                        if(rname.equalsIgnoreCase(k.get(0).toString()))
                           csh.remove(i);
                           f=1;
                        i++;
                    }
                    if(f==0)
                      System.out.println(("No such cashier exists........."));
                }
                catch(Exception e)
                {
                    System.out.println("");
                }
               
            }   
            else if(choice==4)
            {
                break;
            }
            else{
                System.out.println("Enter Correct Option");
            }
        } out.close();
    }
    public static void main(String[] args)throws IOException {
        System.out.println("\n\t\t\t\tWELCOME TO DEPARTMENTAL STORE");
        while(true)
        {
            int choice;
            System.out.println("\t\t\t1.Owner\n\t\t\t2.Cashier\n\t\t\t3.Exit");
            System.out.print("Enter Your Option:");
            choice=sc.nextInt();
            if(choice==1)
            {
                
                System.out.print("Enter Owner Name:");
                String oname=sc.next();
                System.out.print("Enter Password:");
                String opass=sc.next();
                if(oname.equalsIgnoreCase("Krithik")&&(opass.equals("2222")))
                {
                    Owner();
                }
                else System.out.println("Wrong ID or Password");
            }
            else if(choice==2)  Cashier();
            else if(choice==3)  break;
            else    System.out.println("Enter Correct Option");
        }
            
        }
   
    }

