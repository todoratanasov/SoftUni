using System;

namespace _8._Condense_Array_to_Number
{
    class Program
    {
        //Write a program to read an array of integers and condense them by summing adjacent couples of elements until a single integer is obtained. 
        //For example, if we have 3 elements {2, 10, 3}, we sum the first two and the second two elements and obtain {2+10, 10+3} = {12, 13}, then 
        //we sum again all adjacent elements and obtain {12+13} = {25}.
        static void Main(string[] args)
        {
            string[] value = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            int elements = value.Length;
            int[] array = new int[elements];

            for (int i = 0; i < elements; i++)
            {
                array[i] = int.Parse(value[i]);
            }
            int checker = elements;
            for (int j = 0; j < elements; j++)
            {
                int[] arrayToSum = new int[elements];

                for (int i = 0; i < checker-1; i++)
                {

                    
                    array[i] = array[i] + array[i + 1];

                    
                }
                checker--;
                if (checker == 0)
                {
                    Console.WriteLine(array[0]);
                    break;
                }
            }
        }
    }
}
