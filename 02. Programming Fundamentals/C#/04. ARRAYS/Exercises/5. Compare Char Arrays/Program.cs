using System;
using System.Linq;

namespace _5._Compare_Char_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            char[] arr1 = Console.ReadLine().Split().Select(char.Parse).ToArray();

            char[] arr2 = Console.ReadLine().Split().Select(char.Parse).ToArray();

            bool arr1IsSmallest = false;
            bool arr2IsSmallest = false;



            for (int i = 0; i < Math.Min(arr1.Length, arr2.Length); i++)
            {
                if (arr1[i] < arr2[i])
                {
                    arr1IsSmallest = true;
                    break;
                }
                else if (arr1[i] > arr2[i])
                {
                    arr2IsSmallest = true;
                    break;
                }
            }

            if (arr1IsSmallest && arr1.Length == arr2.Length)
            {
                foreach (char item in arr1)
                {
                    Console.Write(item);
                }
                Console.WriteLine();
                foreach (char item in arr2)
                {
                    Console.Write(item);
                }
                Console.WriteLine();
            }
            else if (arr2IsSmallest && arr1.Length == arr2.Length)
            {
                foreach (char item in arr2)
                {
                    Console.Write(item);
                }
                Console.WriteLine();
                foreach (char item in arr1)
                {
                    Console.Write(item);
                }
                Console.WriteLine();
            }
            else if (arr1IsSmallest == false && arr2IsSmallest == false && arr1.Length < arr2.Length)
            {
                foreach (char item in arr1)
                {
                    Console.Write(item);
                }
                Console.WriteLine();
                foreach (char item in arr2)
                {
                    Console.Write(item);
                }
                Console.WriteLine();
            }
            else if (arr1IsSmallest == false && arr2IsSmallest == false && arr1.Length > arr2.Length)
            {
                foreach (char item in arr2)
                {
                    Console.Write(item);
                }
                Console.WriteLine();
                foreach (char item in arr1)
                {
                    Console.Write(item);
                }
                Console.WriteLine();
            }
            else if (arr1IsSmallest && arr1.Length < arr2.Length)
            {
                foreach (char item in arr1)
                {
                    Console.Write(item);
                }
                Console.WriteLine();
                foreach (char item in arr2)
                {
                    Console.Write(item);
                }
                Console.WriteLine();
            }
            else if (arr2IsSmallest && arr1.Length > arr2.Length)
            {
                foreach (char item in arr2)
                {
                    Console.Write(item);
                }
                Console.WriteLine();
                foreach (char item in arr1)
                {
                    Console.Write(item);
                }
                Console.WriteLine();
            }
            else if (arr1IsSmallest==false&&arr2IsSmallest==false)
            {
                foreach (char item in arr1)
                {
                    Console.Write(item);
                }
                Console.WriteLine();
                foreach (char item in arr2)
                {
                    Console.Write(item);
                }
                Console.WriteLine();
            }
           



        }
    }
}
