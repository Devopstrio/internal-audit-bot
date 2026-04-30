from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_controls():
    return {'status': 'ok'}
