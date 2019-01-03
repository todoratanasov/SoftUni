using System;

namespace Problem_3._Restaurant_Discount
{
    class Program
    {
        static void Main(string[] args)
        {
            //A restaurant want to automate their reservation process. They need a program that reads the hall and the count of 
            //people from the console and calculates how much the customer should pay to book the place.
            //Different halls have different prices:

            int groupSize = int.Parse(Console.ReadLine());
            string packageType = Console.ReadLine();

            string hall="0";
            double priceOfHall=0;
            double priceOfThePackage=0;
            double discount=0;
            
            int answer = 0;



            if(groupSize<=50)
            {
                //Small Hall
                hall = "Small Hall";
                priceOfHall = 2500;

            }
            else if(groupSize > 50&&groupSize<=100)
            {
                //Terrace
                hall = "Terrace";
                priceOfHall = 5000;
            }
            else if(groupSize>100&&groupSize<=120)
            {
                //Great Hall
                hall = "Great Hall";
                priceOfHall = 7500;
            }
            else
            {
                Console.WriteLine("We do not have an appropriate hall.");
                answer = -1;
            }
            if (answer == 0) {
                if (packageType== "Normal")
                {
                    //Normal
                    discount = 0.05;
                    priceOfThePackage = 500;

                } else if (packageType=="Gold")
                {
                    //Gold
                    discount = 0.1;
                    priceOfThePackage = 750;
                }
                else if (packageType=="Platinum")
                {
                    //Platinum
                    discount = 0.15;
                    priceOfThePackage = 1000;
                }

                double pricePerPerson = ((priceOfHall + priceOfThePackage) - ((priceOfHall + priceOfThePackage) * discount)) / groupSize;
                Console.WriteLine($"We can offer you the {hall}{Environment.NewLine}The price per person is {pricePerPerson:f2}$");
            }
        }
    }
}
