using System;
using System.Linq;


namespace _4._Triple_Sum
{
    class Program
    {
        //Write a program to read an array of integers and find all triples of elements a, b and c, such that a + b == c 
        //(where a stays to the left from b). Print “No” if no such triples exist.
        static void Main(string[] args)
        {
            //събираме всички с първото, второто и пр. Сравняваме с всички отговори, като през това и a и b имат стойност и ако се намери такова 
            //число да се изпечатва, ако не да се връща накра на цикъла и a и b в начална позиция 0

            string value = Console.ReadLine();
            string[] items = value.Split(" ");


            long[] array = new long[items.Length];
            bool validator = false;          


                for (long i = 0; i < array.Length; i++)
                {
                    array[i] += long.Parse(items[i]);
                }
                for (long i = 0; i < array.Length; i++)
                {
                    long a = array[i];
                    for (long j = 1 +i; j < array.Length; j++)
                    {
                        long b = array[j];
                    long sum = a + b;
                    if (array.Contains(sum))
                    {
                        Console.WriteLine($"{a} + {b} == {sum}");
                        validator = true;
                    }
                    }
                }
            
            if (validator == false)
            {
                Console.WriteLine("No");
            }




        }
    }
}
