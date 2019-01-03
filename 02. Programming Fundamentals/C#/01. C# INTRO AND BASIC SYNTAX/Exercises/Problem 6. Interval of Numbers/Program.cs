using System;

namespace Problem_6._Interval_of_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            int secondNumber = int.Parse(Console.ReadLine());
            if (number<secondNumber) {
                for (int i = number; i < secondNumber + 1; i++)
                {
                    Console.WriteLine(i);
                }
            }
            else
            {
                for (int i = secondNumber; i < number + 1; i++)
                {
                    Console.WriteLine(i);
                }
            }
        }
    }
}
