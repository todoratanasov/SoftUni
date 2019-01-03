using System;
using System.Collections.Generic;
using System.Linq;

namespace _2._Odd_Occurrences
{
    class Program
    {
        //Write a program that extracts from a given sequence of words all elements that present in it odd number of times (case-insensitive).
        //•	Words are given in a single line, space separated.
        //•	Print the result elements in lowercase, in their order of appearance.

        static void Main(string[] args)
        {
            List<string> value = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(x=> x.ToLower()).ToList();
            int sizeOfValue = value.Count;
            Dictionary<string, int> answer = new Dictionary<string, int>();

            for (int i = 0; i < sizeOfValue; i++)
            {
                string word = value[i];
                int counter = 0;
                if (answer.ContainsKey(word)==false)
                {
                    answer.Add(word, 0);
                    
                    for (int j = 0; j < sizeOfValue; j++)
                    {
                        string temp = value[j];
                        if (word==temp)
                        {
                            counter++;
                        }
                        answer[word] = counter;
                    }
                }
            }
            var output = new List<string>();
            foreach (var item in answer)
            {
                answer.TryGetValue(item.Key, out int occ);
                if (occ%2!=0)
                {
                    output.Add(item.Key);
                }
            }
            Console.WriteLine(string.Join(", ", output));
        }
    }
}
