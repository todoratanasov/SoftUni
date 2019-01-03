using System;
using System.Collections.Generic;
using System.Linq;

namespace _4._Split_by_Word_Casing
{
    class Program
    {
        //Read a text, split it into words and distribute them into 3 lists.
        //	Lower-case words like “programming”, “at” and “databases” – consist of lowercase letters only.
        //	Upper-case words like “PHP”, “JS” and “SQL” – consist of uppercase letters only.
        //	Mixed-case words like “C#”, “SoftUni” and “Java” – all others.
        //Use the following separators between the words: , ; : . ! ( ) " ' \ / [ ] space
        //Print the 3 lists as shown in the example below.

        static void Main(string[] args)
        {
            List<string> value = Console.ReadLine()
                .Split(new char[] { ',', ';', ':', '.', '!', '(', ')', '\"', '\'', '\\', '/', '[', ']', ' ' }).ToList();

            List<string> LowerCase = new List<string>();
            List<string> MixedCase = new List<string>();
            List<string> UpperCase = new List<string>();

            foreach (var item in value)
            {
                bool lower = true;
                bool upper = true;
                bool mixed = true;
                string toAdd = "";
                if (item != "")
                {


                    for (int i = 0; i < item.Length; i++)
                    {
                        char temp = item[i];
                        //97 - 122
                        if (temp >= 97 && temp <= 122 && lower == true)
                        {
                            toAdd += temp;
                        }
                        else if (temp >= 65 && temp <= 90 && upper == true)
                        {
                            lower = false;
                            //65 - 90
                            toAdd += temp;
                        }
                        else
                        {
                            lower = false;
                            upper = false;
                            toAdd += temp;
                        }
                    }

                    if (lower)
                    {
                        //all lower case
                        if (toAdd != " ")
                        {
                            LowerCase.Add(toAdd);
                        }


                    }
                    else if (upper)
                    {
                        //all upper case
                        if (toAdd != " ")
                        {
                            UpperCase.Add(toAdd);
                        }

                    }
                    else if (mixed)
                    {
                        //mixed
                        if (toAdd != " ")
                        {
                            MixedCase.Add(toAdd);
                        }

                    }
                }
            }

            Console.WriteLine($"Lower-case: {string.Join(", ", LowerCase)}");
            Console.WriteLine($"Mixed-case: {string.Join(", ", MixedCase)}");
            Console.WriteLine($"Upper-case: {string.Join(", ", UpperCase)}");
            
        }
    }
}
