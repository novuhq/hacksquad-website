#include <stdio.h>

int main(void)
{
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        int t, s = 0, N;
        scanf("%d", &t);
        while (t > 0)
        {
            N = t % 10;
            t = t / 10;
            s = s + N;
        }
        printf("%d\n", s);
    }
    return 0;
}
