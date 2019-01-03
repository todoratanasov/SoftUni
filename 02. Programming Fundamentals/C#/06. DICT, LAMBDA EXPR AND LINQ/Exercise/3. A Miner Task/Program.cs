using System;
using System.Collections.Generic;

namespace _3._A_Miner_Task
{
    class Program
    {
        //You are given a sequence of strings, each on a new line. Every odd line on the console is representing a resource (e.g. Gold, Silver, 
        //Copper, and so on), and every even – quantity. Your task is to collect the resources and print them each on a new line. 
        //Print the resources and their quantities in format:
        //{resource} –> {quantity}
        //The quantities inputs will be in the range[1 … 2 000 000 000]

        static void Main(string[] args)
        {

            SortedDictionery<string, int> mining = new SortedDictionery<string, int>();

            int counter = 3;
            string toAdd = "";
            int toAddInt = 0;
            while (true)
            {
                string value = Console.ReadLine();

                if (value == "stop")
                {
                    break;
                }

                if ((counter % 2 == 0) == false)
                {
                    toAdd = value;
                    counter++;

                }
                else
                {
                    toAddInt = int.Parse(value);
                    if (mining.ContainsKey(toAdd)==false)
                    {
                        mining.Add(toAdd, toAddInt);
                    }
                    else
                    {
                        mining[toAdd] = mining[toAdd] + toAddInt;
                    }

                    toAdd = "";
                    toAddInt = 0;
                    counter++;
                }

            }
            foreach (var item in mining)
            {
                Console.WriteLine($"{item.Key} -> {item.Value}");
            }


        }
    }
}
