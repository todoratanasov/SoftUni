using System;
using System.Collections.Generic;

namespace _4._Fix_Emails
{
    class Program
    {
        //You are given a sequence of strings, each on a new line, until you receive the “stop” command. The first string is the name of a person. 
        //On the second line, you will receive their email. Your task is to collect their names and emails, and remove emails whose domain ends with
        //"us" or "uk" (case insensitive). Print:
        //{name} – > {email}

static void Main(string[] args)
        {
            SortedDictionery<string, string> emailBook = new SortedDictionery<string, string>();
            int counter = 3;
            string toAddName = "";
            string toAddMail = "";

            while (true)
            {
                string value = Console.ReadLine();
                if (value=="stop")
                {
                    break;
                }

                if ((counter%2==0)==false)
                {
                    toAddName = value;
                    counter++;
                }
                else
                {
                    toAddMail = value;
                    string toCheck = (toAddMail[toAddMail.Length - 2])+toAddMail[toAddMail.Length - 1].ToString();
                                        
                    if (toCheck!="us"&&toCheck!="uk")
                    {
                        if (emailBook.ContainsKey(toAddName)==false)
                        {
                            emailBook.Add(toAddName, toAddMail);
                        }
                    }
                    counter++;
                    toAddMail = "";
                    toAddName = "";
                }
            }
            foreach (var item in emailBook)
            {
                Console.WriteLine($"{item.Key} -> {item.Value}");
            }
        }
    }
}
