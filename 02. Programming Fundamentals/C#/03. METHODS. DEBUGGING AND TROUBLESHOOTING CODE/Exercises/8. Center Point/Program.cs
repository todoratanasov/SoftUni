using System;

namespace _8._Center_Point
{
    class Program
    {
        //You are given the coordinates of two points on a Cartesian coordinate system - X1, Y1, X2 and Y2. 
        //Create a method that prints the point that is closest to the center of the coordinate system (0, 0) 
        //in the format (X, Y). If the points are on a same distance from the center, print only the first one.

        static void Main(string[] args)
        {
            string numbers = CheckCoordinates(double.Parse(Console.ReadLine()), double.Parse(Console.ReadLine()), double.Parse(Console.ReadLine()), double.Parse(Console.ReadLine()));
            Console.WriteLine(numbers);
        }
        static string CheckCoordinates(double x, double y, double x1, double y1)
        {
            double xPos = x;
            double yPos = y;
            double x1Pos = x1;
            double y1Pos = y1;

            double resultX = 0;
            double resultY = 0;
            
            if (x < 0)
            {
                xPos = x * -1;
            }
            if (y < 0)
            {
                yPos = y * -1;
            }
            if (x1 < 0)
            {
                x1Pos = x1 * -1;
            }
            if (y1 < 0)
            {
                y1Pos = y1 * -1;
            }
            if (xPos+yPos<x1Pos+y1Pos)
            {
                resultX = x;
                resultY = y;
            }
            else if (xPos+yPos>x1Pos+y1Pos)
            {
                resultX = x1;
                resultY = y1;
            }
            else if((xPos + yPos == x1Pos + y1Pos))
            {
                resultX = x;
                resultY = y;
            }

            string answer = "("+resultX.ToString() + ", " + resultY.ToString()+")";

            return answer;
        }
    }
}
