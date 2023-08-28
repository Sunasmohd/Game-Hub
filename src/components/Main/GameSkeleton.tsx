import {Card,Skeleton,CardBody, SkeletonText} from '@chakra-ui/react'
const GameSkeleton = () => {
  console.log(' game skel')

  return (

    <>
        <Card borderRadius={10} overflow='hidden'>
            <Skeleton height='240px' ></Skeleton>
            <CardBody>
                <SkeletonText height='120px'></SkeletonText>
            </CardBody>
        </Card>
    </>
  )
}

export default GameSkeleton