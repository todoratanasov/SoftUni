using System;
using System.Collections.Generic;
using System.Linq;

namespace _5._Short_Words_Sorted
{
    class Program
    {
        //Read a text, extract its words, find all short words (less than 5 characters) and print them alphabetically, in lowercase.
        //•	Use the following separators: . , : ; ( )[] " ' \ / ! ? (space).
        //•	Use case-insensitive matching.
        //•	Remove duplicated words.

        static void Main(string[] args)
        {
            List<string> value = Console.ReadLine().Split(new char[] { '.', ',', ':', ';', '(', ')', '[', ']', '\"', '\'', '\\', '/', '!', '?', ' ' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(x => x.ToLower()).Where(x => x.Length < 5).OrderBy(x => x).ToList();

            for (int i = 0; i < value.Count; i++)
            {
                string item = value[i];
                IfContains(item, value);
            }
            
               
            
            Console.WriteLine(string.Join(", ", value));
        }
        static void IfContains(string word, List<string> value)
        {
            int counter = 0;
            for (int i = 0; i < value.Count; i++)
            {
                string temp = value[i];
                if (temp==word)
                {
                    counter++;
                }
                if (counter==2)
                {
                    value.Remove(word);
                    counter--;
                }
            }
            
        }
    }
}
