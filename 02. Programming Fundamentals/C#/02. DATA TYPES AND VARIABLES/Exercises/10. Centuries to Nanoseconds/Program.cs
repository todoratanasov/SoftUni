using System;

namespace _10._Centuries_to_Nanoseconds
{
    class Program
    {
        //Write program to enter an integer number of centuries and convert it to years, days, hours, minutes, seconds, milliseconds, 
        //microseconds, nanoseconds.
        static void Main(string[] args)
        {
            sbyte centuries = sbyte.Parse(Console.ReadLine());
            int year = centuries * 100;
            int days=(int)(year*365.2422);
            uint hours = (uint)(days * 24);
            ulong minutes = (hours * 60);
            ulong seconds = minutes * 60;
            ulong miliseconds = seconds * 1000;
            ulong microseconds = miliseconds * 1000;
            ulong nanoseconds = (ulong)(microseconds * 1000);

            Console.WriteLine($"{centuries} centuries = {year} years = {days} days = {hours} hours = {minutes} minutes = {seconds}" +
                $" seconds = {miliseconds} milliseconds = {checked(microseconds)} microseconds = {checked(nanoseconds)} nanoseconds");
            

            
        }
    }
}
