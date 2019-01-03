using System;
using System.Collections.Generic;
using System.Linq;

namespace _1__Remove_Negatives_and_Reverse
{
    class Program
    {
        //Read a list of doubleegers, remove all negative numbers from it and prdouble the remaining elements in reversed order. In case of no 
        //elements left in the list, prdouble “empty”.
        static void Main(string[] args)
        {
           List<double> mainList = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(double.Parse).Reverse().Where(x => x >= 0).ToList();
          
           if (mainList.Count>0)
           {        
           foreach (var item in mainList)
           {
               Console.Write($"{item} ");
           }
           Console.WriteLine();
           }
           else
           {
               Console.WriteLine("empty");
           }
                     
        }
    }
}
