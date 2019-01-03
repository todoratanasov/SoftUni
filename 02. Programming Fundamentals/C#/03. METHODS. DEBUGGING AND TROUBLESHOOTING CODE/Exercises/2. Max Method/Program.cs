using System;

namespace _2._Max_Method
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = GetMax(int.Parse(Console.ReadLine()), int.Parse(Console.ReadLine()));
            int largestNumber = GetMax(number, int.Parse(Console.ReadLine()));
            Console.WriteLine(largestNumber);
        }
        static int GetMax(int a, int b)
        {
            int result = 0;
            if (a>b)
            {
                result = a;
            }
            else
            {
                result = b;
            }
            return result;
        }
    }
}
