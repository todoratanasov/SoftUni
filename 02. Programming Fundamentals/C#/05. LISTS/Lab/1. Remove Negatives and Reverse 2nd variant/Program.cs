using System;
using System.Collections.Generic;
using System.Linq;

namespace _1._Remove_Negatives_and_Reverse_2nd_variant
{
    class Program
    {
        //Read a list of doubleegers, remove all negative numbers from it and prdouble the remaining elements in reversed order. 
        //In case of no elements left in the list, prdouble “empty”.
        static void Main(string[] args)
        {
            List<double> value = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(double.Parse).ToList();
            double length = value.Count;
            List<double> answer = new List<double>();

            
                for (double i = length; i > 0; i--)
                {
                    double temp = value[i-1];
                    if (temp>0)
                    {
                        answer.Add(temp);
                    }
                }
                
            if (answer.Count>0)
            {
                foreach (var item in answer)
                {
                    Console.Write($"{item} ");
                }
            }
            else
            {
                Console.WriteLine("empty");
            }
        }
    }
}
