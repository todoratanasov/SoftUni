﻿using System;

namespace _12._Rectangle_Properties
{
    class Program
    {
        //Create a program to calculate rectangle’s perimeter, area and diagonal by given its width and height.
        static void Main(string[] args)
        {
            double width = double.Parse(Console.ReadLine());
            double height = double.Parse(Console.ReadLine());

            double perimeter = 2*(width + height);
            double area = width * height;
            double diagonal = Math.Sqrt((width * width) + (height * height));

            Console.WriteLine(perimeter);
            Console.WriteLine(area);
            Console.WriteLine(diagonal);
        }
    }
}
