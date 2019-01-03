using System;
using System.Collections.Generic;
using System.Linq;

namespace _2.__Phonebook_Upgrade
{
    class Program
    {
        //Add functionality to the phonebook from the previous task to print all contacts ordered lexicographically when receive the 
        //command “ListAll”.
        static void Main(string[] args)
        {
            SortedSortedDictionery<string, string> phoneBook = new SortedSortedDictionery<string, string>();

            while (true)
            {
                string value = Console.ReadLine();

                if (value=="END")
                {
                    break;
                }

                List<string> tokens = value.Split(" ", StringSplitOptions.RemoveEmptyEntries).ToList();

                string command = tokens[0];
                if (command == "A")
                {
                    string name = tokens[1];
                    string number = tokens[2];

                    if (phoneBook.ContainsKey(name)==false)
                    {
                        phoneBook.Add(name, "");
                    }
                    phoneBook[name] = number;
                }
                else if (command=="S")
                {
                    string name = tokens[1];
                    if (phoneBook.ContainsKey(name))
                    {
                        string answer = phoneBook[name];
                        Console.WriteLine($"{name} -> {answer}");
                    }
                    else
                    {
                        Console.WriteLine($"Contact {name} does not exist.");
                    }
                }
                else if (command== "ListAll")
                {
                    foreach (var item in phoneBook)
                    {
                        Console.WriteLine($"{item.Key} -> {item.Value}");
                    }
                }
            }
        }
    }
}
