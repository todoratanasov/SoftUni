using System;

namespace Problem_13._Game_of_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int firstNumber = int.Parse(Console.ReadLine());
            int secondNumber = int.Parse(Console.ReadLine());
            int thirdNumber = int.Parse(Console.ReadLine());

            int sum = 0;
            int counter = 0;
            int secondCounter = 0;

            for (int i = firstNumber; i < 999; i++)
            {
                for (int j = secondNumber; j > firstNumber; j--)
                {
                    int a = i;
                    int b = j;
                    sum = a + b;
                    secondCounter += 1;
                    if (sum==thirdNumber)
                    {
                        counter += 1;
                        if (counter==2)
                        {
                            Console.WriteLine($"Number found! {a} + {b}");
                            return;
                        }
                    }
                }
            }
            Console.WriteLine($"{secondCounter} combinations - neither equals {thirdNumber}");

        }
    }
}
