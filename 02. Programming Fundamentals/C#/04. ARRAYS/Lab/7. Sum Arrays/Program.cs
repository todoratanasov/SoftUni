using System;

namespace _7._Sum_Arrays
{
    class Program
    {
        //Write a program that reads two arrays of integers and sums them. When the arrays are not of the same size, duplicate the smaller array 
        //a few times.
        static void Main(string[] args)
        {
            string firstValue = Console.ReadLine();
            string secondValue = Console.ReadLine();

            string[] firstItems = firstValue.Split(" ", StringSplitOptions.RemoveEmptyEntries);
            string[] secondItems = secondValue.Split(" ", StringSplitOptions.RemoveEmptyEntries);

            int firstCounter = firstItems.Length;
            int secondCounter = secondItems.Length;
            int length = Math.Max(firstCounter, secondCounter);
           // if (firstCounter > secondCounter)
           // {
           //     length = firstCounter;
           // }
           // else
           // {
           //     length = secondCounter;
           // }

            

            int[] firstArray = new int[length];
            int[] secondArray = new int[length];

            if (firstCounter > secondCounter)
            {
                int checker = 0;
                for (int i = 0; i < length; i++)
                {
                    

                    firstArray[i] = int.Parse(firstItems[i]);
                    for (int j = checker; j < secondCounter;)
                    {
                        secondArray[i] = int.Parse(secondItems[j]);
                        checker++;
                        break;
                    }
                    if (checker == secondCounter)
                    {
                        secondArray[checker] = int.Parse(secondItems[0]);
                        checker = 0;
                    }

                }
            }
            else if (firstCounter < secondCounter)
            {
                int checker = 0;
                for (int i = 0; i < length; i++)
                {
                    
                    secondArray[i] = int.Parse(secondItems[i]);
                    for (int j = checker; j < firstCounter;)
                    {
                        firstArray[i] = int.Parse(firstItems[j]);
                        checker++;
                        break;
                    }
                    if (checker == firstCounter)
                    {
                        firstArray[checker] = int.Parse(firstItems[0]);
                        checker = 0;
                    }
                }
            }
            else if (firstCounter == secondCounter)
            {
                for (int i = 0; i < length; i++)
                {
                    firstArray[i] = int.Parse(firstItems[i]);
                    secondArray[i] = int.Parse(secondItems[i]);
                }
            }
            
            for (int i = 0; i < length; i++)
            {
                //Console.Write($"{secondArray[i]} ");
                //Console.WriteLine();
                Console.Write($"{firstArray[i]+secondArray[i]} ");
            }
        }
    }
}
