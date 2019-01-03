using System;
using System.Collections.Generic;
using System.Linq;

namespace _1._Count_Real_Numbers
{
    class Program
    {
        public static object Select { get; private set; }

        //Read a list of real numbers and print them in ascending order along with their number of occurrences.
        static void Main(string[] args)
        {
            List<double> value = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(double.Parse).ToList();
            int sizeOfList = value.Count;

            SortedDictionary<double, int> answer = new SortedDictionary<double, int>();

            for (int i = 0; i < sizeOfList; i++)
            {
                double number = value[i];
                int counter = 0;
                if (answer.ContainsKey(number)==false)
                {
                    answer.Add(number, 0);
                    for (int j = 0; j < sizeOfList; j++)
                    {
                        double temp = value[j];
                        if (number==temp)
                        {
                            counter++;
                        }
                    }
                    answer[number] = counter;
                }
                
            }
            foreach (var item in answer)
            {
                Console.WriteLine($"{item.Key} -> {item.Value}");
            }
        }
    }
}
