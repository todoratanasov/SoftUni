using System;

namespace _2._Reverse_an_Array_of_Integers
{
    class Program
    {
        //Write a program to read an array of integers, reverse it and print its elements. The input consists of a number n (the number of elements)
        //+ n integers, each as a separate line. Print the output on a single line (space separated).
        static void Main(string[] args)
        {
            int numberOfElements = int.Parse(Console.ReadLine());

            int[] array = new int[numberOfElements];

            for (int i = 0; i < array.Length; i++)
            {
                array[i] += int.Parse(Console.ReadLine());
                
            }
            for (int k = array.Length-1; k >= 0; k--)
            {
                Console.WriteLine(array[k]);
            }
        }
    }
}
