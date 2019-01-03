using System;

namespace _1._Day_of_Week1._Day_of_Week
{
    class Program
    {
        //Enter a day number [1…7] and print the day name (in English) or “Invalid Day!”. Use an array of strings.
        static void Main(string[] args)
        {
            string[] days = { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };

            int index = int.Parse(Console.ReadLine());

            if (index>=1&&index<=7)
            {
                Console.WriteLine(days[index-1]);
            }
            else
            {
                Console.WriteLine("Invalid Day!");
            }
        }
    }
}
