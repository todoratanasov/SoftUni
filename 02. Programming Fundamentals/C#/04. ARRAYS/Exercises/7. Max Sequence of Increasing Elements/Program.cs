using System;
using System.Linq;

namespace _7._Max_Sequence_of_Increasing_Elements
{
    class Program
    {
        //Write a program that finds the longest increasing subsequence in an array of integers. The longest increasing subsequence is a portion
        //of the array (subsequence) that is strongly increasing and has the longest possible length. If several such subsequences exist, find the
        //left most of them.
        static void Main(string[] args)
        {
            int[] array = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();

            int arrayLength = array.Length;

            int start = 0;
            int end = 0;

            int bestStart = 0;
            int bestEnd = 0;

            if (arrayLength>1)
            {

            
            for (int i = 1; i < arrayLength; i++)
            {
                start = i - 1;
                for (int j = i; j < arrayLength; j++)
                {
                    int firstNumber = array[j];
                    int secondNumber = array[j - 1];

                    if (firstNumber-secondNumber==1)
                    {
                        end++;
                    }
                    else if (firstNumber - secondNumber != 1 && i != arrayLength)
                    {
                        end++;
                        if (end - start > bestEnd - bestStart)
                        {
                            bestStart = start;
                            bestEnd = end;
                        }
                        
                        break;
                    }
                    if (firstNumber - secondNumber == 1 && i == arrayLength - 1)
                    {
                        end++;

                        if (end - start > bestEnd - bestStart)
                        {
                            bestStart = start;
                            bestEnd = end;

                        }
                        i++;
                        break;
                    }
                    i++;
                }
            }
            for (int i = bestStart; i < bestEnd; i++)
            {
                Console.Write($"{array[i]} ");
            }
            Console.WriteLine();
            }
            else
            {
                Console.WriteLine(array[0]);
            }
        }
    }
}
