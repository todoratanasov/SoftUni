using System;
using System.Linq;

namespace _11._Equal_Sums
{
    //Write a program that determines if there exists an element in the array such that the sum of the elements on its left is equal to the sum of 
    //the elements on its right. If there are no elements to the left / right, their sum is considered to be 0. Print the index that satisfies the 
    //required condition or “no” if there is no such index.
    class Program
    {
        static void Main(string[] args)
        {
            int[] array = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int arrayLength = array.Length;
            bool match = true;
            if (arrayLength > 2)
            {


                for (int i = 1; i < arrayLength; i++)
                {
                    int leftSum = 0;
                    int rightSum = 0;

                    int point = i;
                    for (int j = 0; j < i; j++)
                    {
                        leftSum += array[j];
                    }
                    for (int k = i; k < arrayLength - 1; k++)
                    {

                        rightSum += array[k + 1];
                    }
                    if (leftSum == rightSum)
                    {
                        Console.WriteLine(point);
                        match = false;
                        break;
                    }
                   if (rightSum==0&&rightSum==0)
                   {
                       Console.WriteLine("0");
                       match = false;
                       break;
                   }
                }
            }
            else if (arrayLength == 1)
            {
                Console.WriteLine("0");
                match = false;
            }
            if (arrayLength == 2)
            {
                if (array[0] == 0)
                {
                    Console.WriteLine(1);
                    match = false;
                }
                else if (array[1] == 0)
                {
                    Console.WriteLine(0);
                    match = false;
                }
            }
            if (match)
            {
                Console.WriteLine("no");
            }
        }
    }
}
