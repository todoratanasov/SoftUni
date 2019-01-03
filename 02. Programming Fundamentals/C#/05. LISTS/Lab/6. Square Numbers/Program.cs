using System;
using System.Collections.Generic;
using System.Linq;

namespace _6._Square_Numbers
{
    class Program
    {
        //Read a list of integers and extract all square numbers from it and print them in descending order. A square number is an integer 
        //which is the square of any integer. For example, 1, 4, 9, 16 are square numbers.
        static void Main(string[] args)
        {
            List<int> value = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToList();
            int sizeOfValue = value.Count;
            List<int> answer = new List<int>();

            for (int i = 0; i < sizeOfValue; i++)
            {
                int number = value[i];

                if (Math.Sqrt(number)==(int)Math.Sqrt(number))
                {
                    answer.Add(number);
                }
            }
            answer.Sort((a,b) => b.CompareTo(a));
            //answer.Reverse();

            foreach (var item in answer)
            {
                Console.Write($"{item} ");
            }
        }
    }
}
