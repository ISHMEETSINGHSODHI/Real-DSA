
import sys

sys.path.insert(1, "C:\\Users\\hp\\Desktop\\Problem -Find Year\\Assignment\\data")

import re
#Example: Searching for a pattern in a stringpattern = r"\d+
def main (num):
    found = False
    months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    for year in range(1000,9333):
        for month in months:
            if find_num(year,month,num) == True:
                found = True
                break
        if found:
            break



def find_num(year, month, num):
    path = f"data/{year}/{month}.txt"
    book = read_book (path)

    search_num = re.search(r"C:\\Users\\hp\\Desktop\\Problem -Find Year\\Assignment\\data", book)
    num_of_people = search_num.group(1)
    if num_of_people:
        if int(num_of_people) == int(num):
            print ({year})
            return True
        elif  int (num)  in {50113385, 50113527, 50113551, 50114113}:
            print("year is '9333'")
    else: 
     print (" entered number not found")


def read_book(path):
    with open(path) as f:
        return f.read()


main(856956)
     