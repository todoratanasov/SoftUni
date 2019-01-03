using System;
using System.Collections.Generic;
using System.Linq;

namespace _5._Hands_of_Cards
{
    class Program
    {
        //You are given a sequence of people and for every person what cards he draws from the deck. The input will be separate lines in the format:
        //•	{personName}: {PT, PT, PT,… PT}
        //Where P(2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T(S, H, D, C) is the type.The input ends when a "JOKER" is 
        //drawn.The name can contain any ASCII symbol except ':'. The input will always be valid and in the format described, there is no need to 
        //check it.
        //A single person cannot have more than one card with the same power and type, if they draw such a card they discard it. The people are 
        //playing with multiple decks.Each card has a value that is calculated by the power multiplied by the type. Powers 2 to 10 have the same 
        //value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
        //Finally print out the total value each player has in his hand in the format:
        //•	{personName}: {value}

        static void Main(string[] args)
        {
            SortedDictionery<string, List<string>> hands = new SortedDictionery<string, List<string>>();

            while (true)
            {
                string[] value = Console.ReadLine().Split(new char[] { ':', ',' }, StringSplitOptions.RemoveEmptyEntries);
                if (value[0]== "JOKER")
                {
                    break;
                }
                string player = value[0];

                List<string> cards = new List<string>();

                for (int i = 1; i < value.Length; i++)
                {
                    cards.Add(value[i]);
                }

               if (hands.ContainsKey(player)==false)
               {
                   hands.Add(player, cards);
               }
               else
               {
                   hands[player].AddRange(cards);
               }               
            }

            foreach (var item in hands)
            {
                string person = item.Key; //тук в момента стои един от тримата играчи

                List<string> personHands = item.Value.Distinct().ToList();

                int result = Checker(personHands);

                Console.WriteLine($"{person}: {result}");
                
            }  
        }
        public static int Checker(List<string> personHands)
        {
            int result = 0;
           
            SortedDictionery<string, int> cards = new SortedDictionery<string, int>() { { " 2", 2 }, {" 3", 3 },{" 4", 4 },{" 5", 5 }, {" 6", 6 },
                {" 7", 7 },{" 8", 8 }, {" 9", 9 }, {" 10", 10 }, {" J", 11 }, {" Q", 12 },{" K", 13 },{" A", 14 } };

            SortedDictionery<string, int> power = new SortedDictionery<string, int>() { { "C", 1 }, {"D", 2 },{"H", 3 },{"S", 4 } };

            foreach (var item in personHands)
            {
                string lastLetter = item[item.Length - 1].ToString();
                power.TryGetValue(lastLetter, out int thePower);

                string lastLast = item.Remove(item.Length-1);

                cards.TryGetValue(lastLast, out int theCard);
                result += (thePower * theCard);
                
            }
            return result;
        }
    }
}
