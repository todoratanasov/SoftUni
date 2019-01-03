using System;

namespace _2._Rotate_and_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] value1 = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            string[] value2 = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            int counter = 0;
            for (int i = 0; i < Math.Min(value1.Length, value2.Length); i++)
            {
                if (value1[i]==value2[i])
                {
                    counter++;
                }
                else
                {
                    break;
                }
            }
            for (int i = 1; i <= Math.Min(value1.Length, value2.Length); i++)
            {
                if (value1[value1.Length-i]==value2[value2.Length-i]&&counter!=(Math.Min(value1.Length, value2.Length)))
                {
                    counter++;
                }
                else
                {
                    break;
                }
            }
            
            Console.Write(counter);
        }
    }
}