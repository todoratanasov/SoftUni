namespace _04._Sum_reversed
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    class Sum_Reversed_Numbers
    {
        static void Main()
        {
            string[] input = Console.ReadLine().Split();

            int sum = 0;

            for (int i = 0; i < input.Length; i++)
            {
                string number = input[i];
                List<char> reversedNumber = number.Reverse().ToList();

                string reversedNumberSring = string.Join("", reversedNumber);
                int resultNumber = int.Parse(reversedNumberSring);
                sum += resultNumber;
            }
            Console.WriteLine(sum);
        }
    }
}
