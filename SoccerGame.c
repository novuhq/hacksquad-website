#include"dos.h"
#include"graphics.h"
#include<stdio.h>
#include<conio.h>
#include<process.h>
#include<dos.h>
#include<stdlib.h>
#include<iostream.h>
 union REGS i,o;
 main()
 {
 int initmouse();
 int restrictmouseptr(int,int,int,int);
 int getmousepos(int *,int *,int *);
 int showmouseptr();
int gd=DETECT,gm,maxx,maxy,x,y,button;
 initgraph(&gd,&gm,"");

 int value=0;
 maxx=getmaxx();
 maxy=getmaxy();
setbkcolor(1);
 setviewport(0,0,maxx,maxy,1);
 gotoxy(26,1);
if(initmouse()==0)
 {
 closegraph();
 restorecrtmode(); 
//to go back to normal graphics mode or deleting viewport.
 printf("
mouse driver not loaded");
 exit(1);
 }

 restrictmouseptr(0,getmaxy()-20,maxx,getmaxy()-15);
int a=30;int b=0;
 setcolor(0);
 setfillstyle(1,15);
 int marks=0;
 value=20;
 int s=5;
 int level=0;
 char name[40];
 gotoxy(5,2);
 cout<<"PLEASE ENTER YOUR SWEET NAME::-";
 gets(name);
 gotoxy(5,2);
 cout<<"
";

while(!kbhit())
 {
 getmousepos(&button,&x,&y);
setcolor(15);
 setfillstyle(1,15);
 fillellipse(a,b,10,15);
 if((b>getmaxy()-20)&&(b<=getmaxy()-15))
// For checking the egg position.
{
 if(a>=(x-20)&&(a<=(x+60)))
 {
 marks+=10;
 gotoxy(320,2);
 textcolor(13);
 cout<<"your marks: "<<marks;
}
 }

 if(b>getmaxy()+40)
 {
 b=0;
 a=random(getmaxx());
 gotoxy(10,2);
 cout<<"eggs left: "<<value;
 value--;
 if(value==-1)
 {
 gotoxy(32,10);
 cout<<"LEVEL COMPLETED.";
 level++;
 if(level==4)
 {
 goto varun;
 }
 value=10;
 s++;
 getch();
 gotoxy(32,10);
 cout<<" ";
 }

 setcolor(10);
 line(x,getmaxy(),x+40,getmaxy());
 line(x,getmaxy(),x-20,getmaxy()-20);
 line(x+40,getmaxy(),x+60,getmaxy()-20);
 line(x-20,getmaxy()-20,x+60,getmaxy()-20);
 delay(10);
setcolor(0);
 line(x,getmaxy(),x+40,getmaxy());
 line(x,getmaxy(),x-20,getmaxy()-20);
 line(x+40,getmaxy(),x+60,getmaxy()-20);
 line(x-20,getmaxy()-20,x+60,getmaxy()-20);
 setfillstyle(1,0);
 fillellipse(a,b,10,15);
 b+=s;
 }

 varun:
 gotoxy(30,12);
 cout<<"EXCELLENT WORK "<<name;
 gotoxy(33,15);
 cout<<"GAME OVER. ";
 gotoxy(32,18);
 cout<<"YOUR marks:"<<marks;
 gotoxy(58,24);
 cout<<"COMPOSED BY:";
 gotoxy(55,25);
 cout<<"VARUN KUMAR SONKER";
 gotoxy(30,10);
 cout<<"GREATEST marks::"<< 540;
 getch();
 getch();
 }
 initmouse()
 {
 i.x.ax=0;//for initialising mouse.
 int86(0x33,&i,&o);
 return(o.x.ax);
 }
showmouseptr()
 {
 i.x.ax=1; // for displaying mouse pointer.
 int86(0x33,&i,&o);
 }
 restrictmouseptr(int x1,int y1,int x2,int y2)
 {
 i.x.ax=7; //to define the upper left boundry of mouse.

 i.x.cx=x1;
 i.x.dx=x2;
 int86(0x33,&i,&o);
 i.x.ax=8; //to define the bottom right boundry of mouse.
 i.x.cx=y1;
 i.x.dx=y2;
 int86(0x33,&i,&o);
 }
 getmousepos(int *button,int *x, int *y)
 {
 i.x.ax=3; //to move mouse.
 int86(0x33,&i,&o);
 *button=o.x.bx;
 *x=o.x.cx;
 *y=o.x.dx;
 }
