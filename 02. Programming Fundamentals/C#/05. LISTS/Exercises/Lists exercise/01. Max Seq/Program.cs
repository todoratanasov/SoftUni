namespace _01._Max_Seq
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    class Max_Sequence_of_Equal_Elements
    {
        static void Main()
        {

            string[] numbers = Console.ReadLine().Split();

            int[] parsedNumbers = new int[numbers.Length];

            for (int i = 0; i < numbers.Length; i++)
            {
                parsedNumbers[i] = int.Parse(numbers[i]);
            }

            List<int> longest = new List<int>();
            List<int> current = new List<int>();

            current.Add(parsedNumbers[0]);

            for (int i = 1; i < parsedNumbers.Length; i++)
            {
                if (parsedNumbers[i] == current[0])
                {
                    current.Add(parsedNumbers[i]);
                }
                else
                {
                    if (current.Count > longest.Count)
                    {
                        longest = new List<int>();
                        for (int j = 0; j < current.Count; j++)
                        {
                            longest.Add(current[j]);
                        }
                    }
                    current = new List<int>();
                    current.Add(parsedNumbers[i]);
                }

            }

            if (current.Count > longest.Count)
            {
                longest = new List<int>();
                for (int j = 0; j < current.Count; j++)
                {
                    longest.Add(current[j]);
                }
            }

            Console.WriteLine(string.Join(" ", longest));

        }
    }
}
