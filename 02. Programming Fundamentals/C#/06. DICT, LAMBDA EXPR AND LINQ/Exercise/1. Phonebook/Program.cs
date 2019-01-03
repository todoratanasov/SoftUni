using System;
using System.Collections.Generic;
using System.Linq;

namespace _1._Phonebook
{
    class Program
    {
        //Write a program that receives some info from the console about people and their phone numbers. Each entry should have just one name and 
        //one number (both of them strings). 
        //On each line, you will receive some of the following commands:
        //•	A {name
        //    } {phone
        //} – adds entry to the phonebook.In case of trying to add a name that is already in the phonebook you should change the existing phone number with the new one provided.
        //•	S { name} – searches for a contact by given name and prints it in format "{name} -> {number}". In case the contact isn't found, print "Contact {name} does not exist.".
        //•	END – stop receiving more commands.

        static void Main(string[] args)
        {
            SortedDictionery<string, string> phonebook = new SortedDictionery<string, string>();

            List<string> value = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).ToList();
            

            

            while (value[0]!="END")
            {
                string command = value[0];

                if (command=="A")
                {
                    string name = value[1];
                    string number = value[2];
                    if (phonebook.ContainsKey(name)==false)
                    {
                        phonebook.Add(name, "");
                    }
                    phonebook[name] = number;
                }
                else if (command=="S")
                {
                    string name = value[1];
                    if (phonebook.ContainsKey(name))
                    {
                        
                        phonebook.TryGetValue(name, out string dicValue).ToString();
                        Console.WriteLine($"{name} -> {dicValue}");
                    }
                    else
                    {
                        Console.WriteLine($"Contact {name} does not exist.");
                    }
                    
                }
                value.Clear();
                value = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).ToList();

            }

        }
    }
}



