using System;

namespace _5._Fibonacci_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int answer = Fib(int.Parse(Console.ReadLine()));
            Console.WriteLine(answer);
        }
        static int Fib(int n)
        {
            int digit = 1;
            int f1 = 0;
            int f2 = 1;
            for (int i = 0; i < n; i++)
            {
                //0,1,1,2,3,5,8
                

                int result = f1 + f2;
                f1 = f2;
                f2 = result;
                digit = result;

            }

            return digit;
        }
    }
}
