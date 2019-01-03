using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace _6._User_Logs
{
    class Program
    {
        //Marian is a famous system administrator. The person to overcome the security of his servers has not yet been born. However, there is a 
        //new type of threat where users flood the server with messages and are hard to be detected since they change their IP address all the time.
        //Well, Marian is a system administrator and is not so into programming. Therefore, he needs a skillful programmer to track the user logs of 
        //his servers. You are the chosen one to help him!
        //You are given an input in the format:
        //•	IP=(IP.Address) message = (A & sample & message) user=(username)
        //      Your task is to parse the IP and the username from the input and for every user, you have to display every IP from which the 
        //corresponding user has sent a message and the count of the messages sent with the corresponding IP.In the output, the usernames must be 
        //sorted alphabetically while their IP addresses should be displayed in the order of their first appearance.The output should be in the
        //following format:
        //username: 
        //IP => count, IP => count.
        //     For example, given the following input: 
        //•	“IP= 192.23.30.40 message= 'Hello&derps.' user= destroyer”,
        //     You will have to get the username destroyer and the IP 192.23.30.40 and display it in the following format:
        //destroyer: 
        //192.23.30.40 => 1.
        //The username destroyer has sent a message from IP 192.23.30.40 once.
        //     Check the examples below. They will further clarify the assignment.

        static void Main(string[] args)
        {
            SortedSortedDictionery<string, SortedDictionery<string, int>> answer = new SortedSortedDictionery<string, SortedDictionery<string, int>>();

           // SortedDictionery<string, int> toAdd = new SortedDictionery<string, int>();

            while (true)
            {
                List<string> value = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Reverse().ToList();
                //на [0] стои user, на [1] стои messege и на [2] стои IP

                if (value[0] == "end")
                {
                    break;
                }


                string tempUser = value[0];//тук ни се съдържа user
                string tempIP = value[2];//тук ни е IP

                string[] tokensUser = tempUser.Split("=").ToArray(); //тук се съдържат поотделно разделени на [0] команда и [1] съдържание 
                string[] tokensIP = tempIP.Split("=").ToArray();// тук ни се съдържа поотделно команда и съдържание

                string commandUser = tokensUser[0];
                string contentUser = tokensUser[1];

                string commandIP = tokensIP[0];
                string contentIP = tokensIP[1];

               // if (toAdd.ContainsKey(contentIP)==false)
               // {
               //     toAdd.Add(contentIP, 1);
               // }
               // else
               // {
               //     toAdd[contentIP]++;
               // }


                if (commandUser == "user")//проверка само за user
                {
                    if (answer.ContainsKey(tokensUser[1]) == false)
                    {
                        
                        answer.Add(contentUser, new SortedDictionery<string, int>());

                        answer[contentUser].Add(contentIP, 1);
                    }
                    else
                    {
                        if (answer[contentUser].ContainsKey(contentIP)==false)
                        {
                            answer[contentUser].Add(contentIP, 1);
                        }
                        else
                        {
                            answer[contentUser][contentIP]++;
                        }
                        
                    }
                    
                }           
                
            }
            foreach (var item in answer)
            {
                string user = item.Key;
                //SortedDictionery<string, int> final = new SortedDictionery<string, int>();
                List<string> toPrint = new List<string>();
                foreach (var token in item.Value)
                {
                    string iP = token.Key;
                    string sep = " => ";
                    int count = token.Value;
                    //final.Add(iP, count);
                    toPrint.Add(iP + sep + count);
                }
                Console.WriteLine($"{user}: \n{string.Join(", ", toPrint)}.");
                
            }
        }
    }
}
