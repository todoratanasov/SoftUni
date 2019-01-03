using System;
using System.Collections.Generic;
using System.Linq;

namespace _7._Count_Numbers
{
    class Program
    {
        //Read a list of integers in range [0…1000] and print them in ascending order along with their number of occurrences.
        static void Main(string[] args)
        {
            List<int> value = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToList();
            int sizeOfValue = value.Count;
            value.Sort((a, b) => a.CompareTo(b));
            List<int> theNumber = new List<int>();
            List<int> occurences = new List<int>();

            for (int i = 0; i < sizeOfValue; i++)
            {
                int counter = 0;
                int number = value[i];
                if (theNumber.Contains(number) == false)
                {
                    theNumber.Add(number);
                    for (int j = 0; j < sizeOfValue; j++)
                    {
                        int temp = value[j];
                        if (number == temp)
                        {
                            counter++;
                        }
                    }
                    occurences.Add(counter);
                }

            }

            for (int i = 0; i < theNumber.Count; i++)
            {
                Console.WriteLine($"{theNumber[i]} -> {occurences[i]}");
            }

        }
    }
}
