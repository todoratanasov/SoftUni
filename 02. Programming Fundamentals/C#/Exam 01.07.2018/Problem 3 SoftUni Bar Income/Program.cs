using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Problem_3_SoftUni_Bar_Income
{
    class Program
    {
        static void Main(string[] args)
        {
            
                char[] s = { '!', '\"', '#', '&', '\'', '(', ')', '*', '+', ',', '-', '/', ':', ';', '=', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '}', '~' };
                while (true)
                {
                    string[] value = Console.ReadLine().Split(s, StringSplitOptions.RemoveEmptyEntries).ToArray();

                    if (value[0] == "end of shift")
                    {
                        break;
                    }
                    Console.WriteLine(value[0]);
                    
                }
            
        }
    }
}
