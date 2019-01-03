using System;

namespace _3._Last_K_Numbers_Sums_Sequence
{
    class Program
    {
        //Enter two integers n and k. Generate and print the following sequence of n elements:
        //•	The first element is: 1
        //•	All other elements = sum of the previous k elements(if less than k are available, sum all of them)
        //•	Example: n = 9, k = 5  120 = 4 + 8 + 16 + 31 + 61

        static void Main(string[] args)
        {
            int numberOfElements = int.Parse(Console.ReadLine());
            int numbersToSum = int.Parse(Console.ReadLine());

            long[] array = new long[numberOfElements+numbersToSum];
            array[numbersToSum] = 1;
            for (int i = 0; i < numberOfElements; i++)
            {
                int[] sum = new int[numbersToSum];
                
                for (int k = numbersToSum-1+i; k >= 0+i; k--)
                {
                    array[i+numbersToSum] += array[k];
                    
                    
                }
                Console.WriteLine(array[numbersToSum+i]);
            }
        }
    }
}
