using System;

namespace _6._Reverse_an_Array_of_Strings
{
    class Program
    {
        //Write a program to read an array of strings, reverse it and print its elements. The input consists of a sequence of space separated 
        //strings. Print the output on a single line (space separated).
        static void Main(string[] args)
        {
            string value = Console.ReadLine()+" ";
            string[] items = value.Split(" ", StringSplitOptions.RemoveEmptyEntries);
            int elements = items.Length;
            Console.WriteLine(items[1]);
            string[] array = new string[elements];

            for (int i = 0; i < elements; i++)
            {
                
                for (int j = elements-1; j >= 0;)
                {
                    array[i] = items[j-i];
                    break;
                }
                Console.Write($"{array[i]} ");
            }
            
        }
    }
}
