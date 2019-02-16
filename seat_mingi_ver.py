# line = [ "박흥준"
#        , "강덕영"
#        , "유천호"
#        , "오승윤"
#        , "민민기"
#        , "홍은진"
#        , "박성준"
#        , "신현수"
#        , "장효인"
#        , "조진혁"
#        , "허다영"
#        , "황경찬"
#        , "장철희"
#        , "김민창"
#        ]
#
line = [ "김민창"
       , "박흥준"
       , "장철희"
       , "박성준"
       , "황경찬"
       , "강덕영"
       , "허다영"
       , "신현수"
       , "홍은진"
       , "민민기"
       , "장효인"
       , "조진혁"
       , "오승윤"
       , "유천호"
       ]
# seat_map = [ [ -1, -1, 9, 2]
#            , [ 1, 10, 8, 3]
#            , [ 0, 11, 7, 4]
#            , [ 13, 12, 6, 5]
#            ]
seat_map = [ [ -1, -1, 11, 13]
           , [ 5, 6, 10, 12]
           , [ 1, 4, 7, 9]
           , [ 0, 2, 3, 8]
           ]

# def show_name(seats=seat_map):


def make_seat(name="박흥준", offset=0):

    future_seat_map = [(seat-offset)%14 if seat != -1 else -1 \
                       for row in seat_map \
                       for seat in row ]

    for i, idx in enumerate(future_seat_map) :
        if idx == 0:
            if i & 1 == 0 :
                my_pair_idx = future_seat_map[i+1]
            else :
                my_pair_idx = future_seat_map[i-1]

    # print(future_seat_map)
    # Gonna return pair partner
    return line[my_pair_idx]

if __name__ == "__main__" :
    for i in range(25):
        print(make_seat(offset=i))
